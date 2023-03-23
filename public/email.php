<?php

require_once('./PHPMailer-master/src/PHPMailer.php');
require_once('./PHPMailer-master/src/smtp.php');
require_once('./PHPMailer-master/src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;




// Cria um array com as informações do formulário
$formData = json_encode(array(
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'twerkLevel' => $_POST['twerkLevel'],
    'city' => $_POST['city'],
    'genero' => $_POST['genero'],
    'twerkDefinition' => $_POST['twerkDefinition']
  ));

  // Configurações de conexão com o banco de dados
  $host = 'jetrindade.mysql.dbaas.com.br';
  $dbname = 'jetrindade';
  $username = 'jetrindade';
  $password = 'Arque@2324';
  
  // Faz a conexão com o banco de dados usando PDO
  try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo "Erro ao conectar com o banco de dados: " . $e->getMessage();
    die();
  }
  
    // Prepara a query de inserção de dados
    $sql = "INSERT INTO leads (json_data) VALUES (:json_data)";
    $stmt = $conn->prepare($sql);

    // Executa a query de inserção de dados, passando o valor do formData como parâmetro
    // Prepara a query de inserção de dados
    $sql = "INSERT INTO leads (leads) VALUES (:leads)";
    $stmt = $conn->prepare($sql);

    // Executa a query de inserção de dados, passando o valor do formData como parâmetro
    try {
        $stmt->bindValue(':leads', $formData, PDO::PARAM_STR);
        $stmt->execute();
        echo "Dados inseridos com sucesso!";
    } catch(PDOException $e) {
        echo "Erro ao inserir os dados no banco de dados: " . $e->getMessage();
    }
  
    // Fecha a conexão com o banco de dados
    $conn = null;


$mail = new PHPMailer(true);


try {
    // Configurações do servidor SMTP da Umbler
    $mail->isSMTP();
    $mail->Host = 'smtp.umbler.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'twerkacademy@twerkacademy.com.br';
    $mail->Password = 'TwerkAcademy@2324';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Configurações do e-mail a ser enviado
    $mail->setFrom('twerkacademy@twerkacademy.com.br', 'TwerkAcademy');
    $mail->addAddress($_POST['email'], $_POST['name']);
    $mail->Subject = 'Curso de TwerkAcademy Gratuito';
    $mail->Body = '
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1"/>
        <title>Je Trindade</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;600&display=swap" rel="stylesheet">
        <style>
            *{
                padding: 0;
                margin: 0;
            }
            body{
                display: flex;
                align-items: center;
                justify-content: center;
                height: auto;
                background-color:white;
                flex-direction: column;
                background-image: url("https://baldoo.com.br/Amply/AmplyImages/Clientes/Jetrindade/mainBg.webp");
            }
            header{
                background-color: #eb2273;
                width: 100%;
                height: 80px;
                align-items: center;
                justify-content: space-between;
    
                display: flex;
            }
            header img{
                height: 60px;
                margin-left: 60px;
         
            }
    
            .divContent{
                width: 90%;
                height: max-content;
            }
    
            .divContent h1{
                font-family: "Alexandria", sans-serif;
                font-weight: BOLDER;
                font-family: 24px;
            }
            .divContent h1 span{
                color: #ff964e;
            }
    
            .divContent p{
                font-family: "Alexandria", sans-serif;
                font-weight: regular;
                font-size: 20px;
            }
    
            .divContent a{
                text-decoration: none;
                color: #333;
            }
    
            .divContent a div{
                border: 3px solid #eb2273;
                width: 240px;
                border-radius: 30px;
                margin: 0 auto;
                padding: 3px;
                margin-top: 60px;
            }
            footer{
                
                background-color: #eb2273;
                width: 100%;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                align-items: center;
                text-align:center;
                font-family: "Alexandria", sans-serif;
                font-weight: BOLDER;
                font-family: 24px;
                margin-top: 120px;
                display: flex;
                    }

            footer h3{
                margin:0 auto;
            }
        </style>
        
    </head>
    <body>
        <header>
            <a href="https://twerkacademy.com.br/">
                <img src="https://baldoo.com.br/Amply/AmplyImages/Clientes/Jetrindade/TWERK ACADEMY_BRANCO.png" alt="">
            </a>
            
            <div>
    
            </div>
        </header>
        <div class="divContent" style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333; margin-top: 60px; text-align: center; ">
            <h1>OLÁ! '.$_POST['name'].'<br> AQUI É O TIME DA <span>TwerkAcademy</span> </h1>
             <p>Segue abaixo o acesso <span>gratuito</span>  do seu curso:</p>
            <a href="">
    
                <div>
                    <h2>Acessar Curso</h2> 
                </div>
    
            </a>    
             
        </div>
        <footer>
            <h3>TWERK ACADEMY </h3>
        </footer>
    
       
    
    </body>
    </html>';

    // Define o corpo do e-mail como HTML
    $mail->isHTML(true);
    // Envia o e-mail
    $mail->send();
    echo 'E-mail enviado com sucesso';
} catch (Exception $e) {
    echo 'Ocorreu um erro ao enviar o e-mail: ' . $mail->ErrorInfo;
}
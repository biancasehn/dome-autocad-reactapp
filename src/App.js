import React from 'react';
import './App.css';
import Grid from './components/Grid'
import Button from './components/Button'

function App() {
  return (
    <div className="container">
      <main className="main">
        <div className="hero">
          <h1 className="title">
            Aprenda a dominar o AutoCAD em 2 horas
          </h1>
          <p className="description">
            Conheça o passo a passo para dominar o AutoCAD mesmo sem nunca ter usado antes. 
            Comece a criar os seus próprios projetos e modelos ainda HOJE!        
          </p>
          <Button text={'QUERO ME INSCREVER - Por apenas R$ 29,90'} /> 
        </div>

        <div className="section colSection">
          <img alt="autodesk" src="https://mcusercontent.com/2768e8bfd484e53164a362fc1/images/dfac3f22-8089-4ab1-b758-d318133c4e15.jpeg"></img>
          <p><strong>AutoCAD já é a matéria básica e essencial para todo Engenheiro e Arquiteto. 
            Dominar esse software e começar a usar o quanto antes suas ferramentas o colocará um passo à frente do você de ontem.
            </strong>
            <br></br> <br></br>
            O AutoCAD é um software desenvolvido pela AUTODESK para auxiliar, ajudar, incentivar 
            e melhorar a vida dos projetistas. Já é hoje considerado uma matéria básica e necessária para todo estudante da área.
            <br></br> <br></br>
            Se você não conhece essa ferramenta, ou  já perdeu oportunidades de trabalho, estágio 
            por insegurança ou por não usá-la, não adie mais o seu progresso. Esse curso é para VOCÊ!
          </p>
        </div>

        <div  style={{backgroundColor:"#8dbcc0"}}>
          <div className=" section section2">
              <p className="titleSection"><strong>O que torna este Curso um diferencial?</strong></p>
          </div>
          <Grid />
        </div>
            
        <div className="section section2">
          <p className="titleSection"><strong>Ao inscrever-se no Curso:</strong></p>
          <p><strong>1. Familiarizando-se com a interface do software</strong><br></br>
          Abordagem e introdução do programa para que você familiarize-se e acompanhe as aulas.</p>
          <p><strong>2. Configurações para melhorar a eficiência e a prática</strong><br></br>
          Personalização individual que facilitará o seu dia a dia e criação de projetos.</p>
          <p><strong>3. Apresentação e manuseio das ferramentas básicas</strong><br></br>
          Abordaremos todas as ferramentas necessárias e as mais usadas no dia a dia. As melhores
            maneiras de usar cada uma delas, poupando tempo e otimizando o trabalho.</p>
          <p><strong>4. Apresentação e manuseio das ferramentas avançadas</strong><br></br>
          Ferramentas e comandos avançados de menor uso mas essenciais e eficientes na hora de projetar.</p>
          <p><strong>5. Configuração das folhas e carimbo para a impressão/plotagem</strong><br></br>
          Como organizar o seu projeto, desenho, cortes, textos, legendas nas folhas A0, A1, etc. Como configurar cada opção para a sua plotagem sair perfeita.</p>
          <p><strong>6. Atividade para praticar o conteúdo apresentado</strong><br></br>
            Projetos completos realizados por um profissional disponíveis para você praticar ao final do curso.</p>
          <Button text={'Matricule-se!'} /> 
        </div>

        <div className="section section2" style={{backgroundColor:"#8dbcc0"}}>
          <p className="titleSection"><strong>Benefícios</strong></p>
          <p>Colocará em prática de forma rápida todo o conhecimento adquirido, melhorando sua habilidade de manuseio e técnicas de elaboração de projeto</p>
          <p>Contará com o suporte da equipe desenvolvedora para qualquer eventual dúvida</p>
          <p>Estudar e praticar de qualquer lugar dentro do seu horário e rotina</p>
          <p>Curso disponível por tempo ilimitado sempre que precisar rever as aulas</p>
          <span style={{textAlign: "center"}}>
            <img alt='pc' src="https://mcusercontent.com/2768e8bfd484e53164a362fc1/images/9b50e1c5-1a52-4e90-8890-70e59381145e.png"></img>
          </span> <br></br>
        </div>

        <div className="section section2">
          <p className="titleSection"><strong>7 DIAS DE GARANTIA!</strong></p>
          <p>Você terá uma semana para solicitar o cancelamento de sua compra e ter o seu dinheiro de volta. O Artigo 49. do CDC garante a sua desistência e reembolso sem quaisquer motivos dentro do prazo de 7 dias.</p>
          <Button text={'Não perca esta oportunidade e inscreva-se agora!'} />
        </div>

        </main>
{/* 
        <div className="socialmedia">
            <a href="https://www.facebook.com/juliano.veronese" className="facebook">
                <img src="https://eep.io/mc-cdn-images/icons/social-block-v2/color-facebook-96.png" alt="Facebook" width="100%" style={{maxWidth: "48px", display: "block", webkit:"border-box", border: "0" , height: "auto", outline: "none", textDecoration: "none"}} />
            </a>
            <a href="http://www.twitter.com/" className="twitter">
                <img src="https://eep.io/mc-cdn-images/icons/social-block-v2/color-twitter-96.png" alt="Twitter" width="100%" style={{maxWidth: "48px", display: "block", webkit:"border-box", border: "0" , height: "auto", outline: "none", textDecoration: "none"}} />
            </a>
            <a href="http://www.twitter.com/" className="instagram">
                <img src="https://eep.io/mc-cdn-images/icons/social-block-v2/color-instagram-96.png" alt="Twitter" width="100%" style={{maxWidth: "48px", display: "block", webkit:"border-box", border: "0" , height: "auto", outline: "none", textDecoration: "none"}} />
            </a>
        </div> */}

        <footer className="footer">
          <br></br>
        </footer>
    </div>
  );
}

export default App;

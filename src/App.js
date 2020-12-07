import React from 'react';
import './App.css';
import Grid from './components/Grid'
import Button from './components/Button'

import logo from './logo.png'
import autodesk from './autodesk.jpeg'
import pcImage from './pc.png'
import casa from './casa.png'

function App() {
  return (
    <div className="container">
      <main className="main">
        <div className="hero">
          <img alt="logo" src={logo} />
          <h1 className="title">
          Dominando o AutoCAD
          </h1>
          <h2 className="subtitle">
          Seja capaz de desenvolver qualquer tipo de projeto no AutoCAD em um curso de 2 horas!
          </h2>
          <Button text={'QUERO ME INSCREVER - Por apenas R$ 24,90'} /> 
        </div>

        <div className="section description" style={{backgroundColor:"#cacaca", color:"#232323"}}>
          <h3>Conheça o passo a passo para dominar o AutoCAD mesmo sem nunca ter usado antes. Comece a criar os seus próprios projetos e modelos ainda HOJE!</h3>
          <img alt="casa" src={casa} />
        </div>

        <div className="section colSection">
          <img alt="autodesk" src={autodesk} />
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

        <div style={{backgroundColor:"#9c2e38", color:"#fff"}}>
          <div className="section section2">
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

        <div className="section section2" style={{backgroundColor:"#9c2e38", color:"#fff"}}>
          <p className="titleSection"><strong>Benefícios</strong></p>
          <p>Colocará em prática de forma rápida todo o conhecimento adquirido, melhorando sua habilidade de manuseio e técnicas de elaboração de projeto</p>
          <p>Contará com o suporte da equipe desenvolvedora para qualquer eventual dúvida</p>
          <p>Estudar e praticar de qualquer lugar dentro do seu horário e rotina</p>
          <p>Curso disponível por tempo ilimitado sempre que precisar rever as aulas</p>
          <span style={{textAlign: "center"}}>
            <img alt='pc' src={pcImage} />
          </span> <br></br>
        </div>

        <div className="section section2">
          <p className="titleSection"><strong>7 DIAS DE GARANTIA!</strong></p>
          <p>Você terá uma semana para solicitar o cancelamento de sua compra e ter o seu dinheiro de volta. O Artigo 49. do CDC garante a sua desistência e reembolso sem quaisquer motivos dentro do prazo de 7 dias.</p>
          <Button text={'Não perca esta oportunidade e inscreva-se agora!'} />
        </div>

        </main>

        <footer className="footer">
          <p>Contato:</p>
          <div className="socialmedia">
            <a href="https://www.instagram.com/dominandoautocad/" target="_blank" className="instagram">
                <img src="https://eep.io/mc-cdn-images/icons/social-block-v2/color-instagram-96.png" alt="instagram" width="100%" style={{maxWidth: "48px", display: "block", webkit:"border-box", border: "0" , height: "auto", outline: "none", textDecoration: "none"}} />
            </a>
          </div>
        </footer>
        <div className="privacy">
            <span>DominandoAutoCAD</span>
            <img alt="logo" src={logo} />
        </div>
    </div>
  );
}

export default App;

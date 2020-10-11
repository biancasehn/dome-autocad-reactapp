import React from 'react'
import '../styles/Grid.css'
import '../styles/Card.css'

function Card() {
    return (
        <div className="grid">
            <div className="card">
              <i class="fas fa-cogs"></i>
              <p>Elaborado com o intuito de maior eficiência possível.</p>
            </div>
            <div className="card">
              <i class="fas fa-trophy"></i>
              <p>Aprender de forma simples e rápida todo o necessário para se tornar um mestre no AutoCAD.</p>
            </div>
            <div className="card">
              <div className="icon">
                <div class="far fa-clock"></div>
              </div>
              <p>Aulas separadas por comandos e com pouco tempo de duração.</p>
            </div>
            <div className="card">
              <i class="fas fa-book-open"></i>
              <p>Curso elaborado para garantir sua maior absorção do conteúdo.</p>
            </div>
        </div>
    )
}

export default Card

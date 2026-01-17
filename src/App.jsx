
import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
      nombre="Emma Bostian"
      pais="Suecia"
      imagen="Emma"
      cargo="Ingeniera de Software"
      empresa="Spotify"
      testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero ninguno se comparó con freeCodeCamp. El plan de estudios interactivo y los proyectos prácticos me ayudaron a dominar JavaScript y avanzar en mi carrera como desarrolladora."
      />
      <Testimonio
      nombre="Shawn Wang"
      pais="Singapur"
      imagen="Shawn"
      cargo="Ingeniero de Software"
      empresa="Amazon"
      testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado y el apoyo de la comunidad me ayudaron a obtener mi primer trabajo en la industria."
      />
      <Testimonio
      nombre="Sarah Chima"
      pais="Nigeria"
      imagen="Sarah"
      cargo="Ingeniera de Software"
      empresa="ChatDesk"
      testimonio="freeCodeCamp cambió mi vida. Antes de descubrirlo, luchaba por encontrar trabajo como desarrolladora. Pero gracias a su extenso plan de estudios y proyectos prácticos, pude construir un portafolio impresionante que me consiguió un trabajo en una empresa increíble."
      />
    </div>
  )
}

export default App;
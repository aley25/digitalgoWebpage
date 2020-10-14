const images = require.context('./images', true, /\.svg$/)


const skills = [
    {
        title: 'Innovadores',
        description: 'En Digital Go buscamos el promover la digitalización de todas las empresas ya sean pequeñas, medianas y grandes, esto mediante el uso de nuevas tecnologías de desarrollo web que nos permite brindar una mejor experiencia y tener una escalabilidad alta',
        src: images('./solution.svg')
    },
    {
        title: 'Nosotros',
        description: 'Somos una empresa de Marketing Digital con el fin de apoyar a las pequeñas y medianas empresas en el proceso de tener un canal de entrada a sus clientes de forma online según sus necesidades.',
        src: images('./meeting.svg')
    },
    {
        title: 'Metas',
        description: 'Nuestra meta es ofrecer valor más que un servicio por lo que nos encantaría ayudarte en el proceso de hacer crecer tu empresa y tu numero de clientes. La manera de lograr lo anterior es haciendo un pequeño analisis del entorno de la organización con el fin de diseñar las estrategias y campañas deacuerdo con ello.',
        src: images('./chart.svg')
    }

]

export default skills
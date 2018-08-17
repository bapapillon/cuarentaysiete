import Head from 'next/head'

import Grid from '../components/grid'
import Box from '../components/box'
import Button from '../components/button'

const mockData = [
  {
    title: 'Bienvenido a mil y un caracteres',
    text: 'Este es un lugar donde leeras y compartiras tus textos y no se que mas ',
    image: 'https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2016/07/04/borges_0.jpg',
    backgroundColor: '#E8F3EC',
  },
  {
    title: 'Otra vez visitas',
    text:
      'No habías más opción que recibirlos, por más que uno no quisiera. Eramos muchos nosotros pero ellos venían de tan lejos y de tan antes que no quedo opción. Tampoco era algo malo, pero ya por ser cosa de todos los días y al ser ellos siempre distintos y nosotros siempre los mismos, había una sensación común de no querer recibirlos más.\nSobre todo los que llegaban primeros tenían un aire de superioridad, de conocer todo y conocerlo ya.',
    image: 'https://picsum.photos/600/300/?image=789',
  },
  {
    title: 'La ventana',
    text:
      'Oh la gran ciudad con sus grandes edificios que brotan debajo del cielo y lo tapan así como también tapan las nubes y tapan el sol y tapan el horizonte entonces para el ser humano pequeñito que camina por las calles lo único que se ve en la gran ciudad son los carteles es el cemento es el asfalto es un contenedor de basura una panadería una pizzería un cine un cartel que vende un perfume afrancesado un cartel con una foto del cielo que no se puede ver a menos que el hombresillo compre ese viaje y entonces el hombresillo que tiene muchas ganas de ver el cielo y que está cansado de los edificios se dirige a la agencia de viajes donde le informan de los aviones de las cabañas de maderas con desayuno continental y una ventana por sobre todas las cosas una ventana desde la cual durante su semana de vacaciones se le promete y se le garantiza la vista al cielo a las nubes al sol y al horizonte.',
    image: 'https://picsum.photos/600/300/?image=862',
  },
  {
    title: 'Los toros son peludos',
    text:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque.',
    image: 'https://picsum.photos/600/300/?image=200',
  },
  {
    title: 'El campo y la soledad',
    text:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque.',
    image: 'https://picsum.photos/600/300/?image=300',
  },
  {
    title: 'El rocio de la mañana',
    text:
      'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet.',
    image: 'https://picsum.photos/600/300/?image=400',
  },
]

export default () => (
  <div style={styles.home}>
    <Head>
      <title>1001 caracteres</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
    </Head>
    <Grid data={mockData} />
    <Button />
  </div>
)

const styles = {
  home: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
}

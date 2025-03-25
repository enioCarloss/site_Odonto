import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import styles from "./index.module.scss"
export const LocationPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAT4AeboqDHqPkMVv0H8bFIemdJXuo8Pck',
    })
    const position = {
        lat: -23.5489,
        lng: -46.6388,
    }

    return (
        <section>
            <h1>Como Chegar??</h1>
            <div className='container'>
                <p>Acessamos ao nosso centro odontológico através do endereço: Rua dos Pinheiros, ???, São Paulo.</p>
                <p>Utilize os mapas abaixo para localizar-nos:</p>

                <div className={styles.odonto_maps}>

                    {
                        isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={{ width: '80%', height: '80%' }}
                                center={position}
                                zoom={14}

                            >
                                <Marker position={position} options={{
                                    label: {
                                        text: "OdontoApp",
                                        className: "maps-app"
                                    }
                                }} />
                            </GoogleMap>
                        ) : (
                            <></>
                        )
                    }

                </div>
                <div>
                    <p>Ou ligue para nossos contatos:</p>
                    <p>Telefone: (11) 9999-9999</p>
                    <p>E-mail:  contato@odontapp.com</p>
                </div>

            </div>
        </section>
    )
}

//chaveApi-maps = AIzaSyAT4AeboqDHqPkMVv0H8bFIemdJXuo8Pck

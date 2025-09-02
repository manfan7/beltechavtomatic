import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from '@pbe/react-yandex-maps';
const API_KEY = '180dd9a7-7075-43bd-9f0d-ba13c0186b79'
export const InteractiveMap = () => {
    const mapState = {
        center: [53.556944, 23.998611],
        zoom: 12,
    };

    return (
        <YMaps
            query={{
                apikey: API_KEY, // Получите на https://developer.tech.yandex.ru/
                lang: 'ru_RU',
            }}
        >
            <Map
                state={mapState}
                width="100%"
                height="500px"
                modules={['control.ZoomControl', 'control.GeolocationControl']}
            >
                <Placemark
                    geometry={[53.556944, 23.998611]}
                    properties={{
                        balloonContentHeader: 'Белтехавтоматик',
                        balloonContentBody: 'Производитель электрощитового оборудования',
                        balloonContentFooter: 'Телефон: +375 (29) 889-50-88'
                    }}
                    options={{
                        preset: 'islands#blueFactoryIcon',
                    }}
                    modules={['geoObject.addon.balloon']}
                />

                <ZoomControl options={{ float: 'right' }} />
                <GeolocationControl options={{ float: 'left' }} />
            </Map>
        </YMaps>
    );
};
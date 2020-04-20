

window.initMap = () =>{
  // The location of Uluru
  const maimo = {lat: -34.610490, lng: -58.440860};
  // The map, centered at Uluru
  const map = new google.maps.Map(
      document.getElementById('map'), 
      {
        zoom: 13,

        center: maimo,
        
        styles: styles,
        
        streetViewControl: false,
        
        fullscreenControl: false,
        
        mapTypeControlOptions: {
        
        mapTypeIds: []
        
        },
        
        zoomControlOptions: {
        
        position: google.maps.ControlPosition.LEFT_CENTER
        
        }
      });
      fetchMarkers(map)

}

const fetchMarkers = async (map) => {

    try {
    
    const response = await fetch('assets/markers.json');
    
    const json = await response.json();
    
    json.forEach(marker => {
        addMarker(map,marker);
    console.log(marker)
});
    //var marker = new google.maps.Marker({position:{ lat:marker.lat,lng:marker.lng}, map: map });
    
    //marker.setMap(map);
    
    
    
    } catch (error) {
    
    console.log(error);
     }
    
    }

    const addMarker = (map, marker) => {
        console.log(marker);
        const {lat,lng,name, description,type} = marker;
        const conetentString= `
        <div>
        <h2>${name}</h2>
        <h3>${type}</h3>
        <p>${description}</p>
        </div>`;

        const indoWindows= new google.maps.InfoWindow({
            content: conetentString
        });

        const icons={
            'Birreria': 'assets/img/beer.png',
            'Restaurant': 'assets/img/food.png',
            'Barcito Cheto': 'assets/img/bar.png',
        }
        const markerItem= new google.maps.Marker(
            
            { 
            position:{lat: lat, lng:lng}, 
            icon:icons[type],
            map:map
        
        });
        markerItem.setMap(map);
        markerItem.addListener('click', function(){
            indoWindows.open(map,markerItem)
        });
    }

    const handleFilterBeer = document.querySelector('.beer');
    const handleFilterBar = document.querySelector('.bar');
    const handleFilterFood = document.querySelector('.food');
    
    handleFilterBeer.addEventListener('click'), (e)=>{
        e.preventDefault();
        addMarkerFilter()
    }
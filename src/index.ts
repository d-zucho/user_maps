let map: google.maps.Map
const center: google.maps.LatLngLiteral = { lat: 0, lng: 0 }

function initMap(): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center,
    zoom: 8,
  })
}

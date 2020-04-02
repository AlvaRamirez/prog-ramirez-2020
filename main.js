const CardItem = props => { 

    const{image, name, species, origin} = props
    const {name: planet, url} = origin;

    return `
    
    <div class="column is-one-quarter">
            First column
            <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                    </div>
                    <div class="container">
                        <button class="button is-dark">Dark</button>
                    </div>
                  </div>
              
                </div>
              </div>
            </div>

    `

}

const main = () =>{


}

main ();

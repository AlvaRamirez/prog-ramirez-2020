const $listado = document.querySelector('#listado');



const dataRow = props => {

    const { _id, lat, lng, name, description, type, web, img } = props

    return `
    
    <div class="item">
    <div class="listado_content">
        <h2 class="titu">${name}</h2>
    </div>
    <div class="btns_wrapper">
        <a href="#" data-id="${_id}" class="btn verde handleEdit">Editar</a>
        <a href="#" data-id="${_id}" class="btn rojo handleDelete">Eliminar</a>
    </div>
</div>

    `
}

const getHeladerias = async (id = '') => {

    const result = await api.getHeladerias();
    console.log(result)
    if (id == '') {
        $listado.innerHTML = '';
        result.forEach(element => {
            $listado.innerHTML += dataRow(element)
        });

    } else {
        const elementByID = result.find(el => id == el._id)
        return elementByID
    }

}

getHeladerias();


const deleteHeladeria = async (id) => {

    const result = await api.deleteHeladeria(id);
    console.log('Deleted')
    getHeladerias();

}

const completeForm = (reg) => { 
    const { lat, lng, name, description, type } = reg;

    $form_field_lat.value = lat
    $form_field_lng.value = lng
    $form_field_name.value = name
    $form_field_description.value = description
    $form_field_type.value = type

}

document.addEventListener('click', async function () {
    if (event.target.matches('.handleDelete')) {
        const id = event.target.dataset.id;
        console.log('click en un boton delete', id);
        deleteHeladeria(id);

    }

    if (event.target.matches('handleEdit')) {
        const id = event.target.dataset.id;
        console.log('click en un boton edit', id);
        const reg = await getHeladerias(id);
        console.log(reg)
    }


}, false)


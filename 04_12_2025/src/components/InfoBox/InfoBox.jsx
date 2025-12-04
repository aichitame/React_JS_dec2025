import "./InfoBox.css";

const InfoBox = ({title, type = "info", children, onClose}) => {

//Podemos crear funciones que controlen y manejen las funciones recibidas por prop.
    const handleCloseClick = () => {
        if(onClose){
            onClose()
        }else{
            alert("No has recibido ninguna función")
        }
    };

    return (
        <section className={`info-box ${type}`}>
            <h2>[{type}]{title}</h2>
            <div>{children}</div>
            <button onClick={handleCloseClick}>Cerrar info</button>
        </section>
    );
};


export default InfoBox;
import { Card } from "@mui/material";
import "./Featured.css";

function Featured() {
    return (
        <div>
            <div>
                <img src="/src/assets/img/pawprint 1.svg"/>
                <h2>Productos destacados</h2>
            </div>

            <div className="articulos">
                <Card>
                <img src="/src/assets/img/churrasquito.jpg"/>
                <h4>Producto 1</h4>
                <p>Precio</p>
                </Card>
                <Card>
                <img src="/src/assets/img/Huesito.jpg"/>
                <h4>Producto 2</h4>
                <p>Precio</p>
                </Card>
                <Card>
                <img src="/src/assets/img/comedero.jpg"/>
                <h4>Producto 3</h4>
                <p>Precio</p>
                </Card>

            </div>
        </div>
    )
}

export default Featured;
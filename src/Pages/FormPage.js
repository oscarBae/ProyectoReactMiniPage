import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
    return (
<div className="container">
      <div className="form-group " >
        <form>
            <div className="row">
            <div className="align-self-center">
              <label for="inputAddress">Nombre</label>
                  <div className="form-group col-md-4">
                    <input type="text" class="form-control" placeholder="Nombre" />
                  </div>
                  </div>
                <div className="form-group col-md-4">
              <label for="inputAddress">Apellido</label>
                    <input type="text" class="form-control" placeholder="Apellido" />
                </div>
            </div>
                <div className="form-group col-md-3">
                  <label for="exampleFormControlInput1">E-mail</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputAddress">Dirección</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-3">
                    <label for="inputCity">Ciudad</label>
                    <input type="text" className="form-control" id="" />
                  </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Dejanos tu consulta</label>
                  <textarea className="form-control col-md-6" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </div>
                <button type="submit"  className="btn btn-secondary">Submit</button>
                <a href="./" > Enviar</a>
        </form>
    </div>
    </div>
    );
}

export default ContactForm;
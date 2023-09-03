export default function PrincipalForm() {
  return (
    <div className="card">
      <div className="card-header bg-success">
        <h2 className="text-white">Formulario</h2>
      </div>
      <div className="card-body">
        <form action="POST">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              pattern="[A-Za-z]+"
              placeholder="Luis"
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="">
              Apellido Paterno
            </label>
            <input
              type="text"
              name="fatherLastName"
              className="form-control"
              pattern="[A-Za-z]+"
              placeholder="Rueda"
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="">
              Apellido Materno
            </label>
            <input
              type="text"
              name="motherLastName"
              pattern="[A-Za-z]+"
              className="form-control"
              placeholder="Pérez"
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="rueda_1@dicio.ai"
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              name="birthday"
              id=""
              required
            />
          </div>
          <div>
            <h4>Datos</h4>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="">
                Calle
              </label>
              <input
                type="text"
                className="form-control"
                pattern="[A-Za-z]+"
                required
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="">
                Numero
              </label>
              <input type="number" className="form-control" required />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="">
                Colonia
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="">
                Delegacion/Municipio
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="">
                Estado
              </label>
              <input
                type="text"
                className="form-control"
                pattern="[A-Za-z]+"
                required
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="">
                CP
              </label>
              <input type="number" className="form-control" required />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="">
                Fotografia
              </label>
              <input type="file" className="form-control" required />
            </div>
          </div>
          <div className="card-footer mt-3">
            <input type="submit" value="Enviar" className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  );
}

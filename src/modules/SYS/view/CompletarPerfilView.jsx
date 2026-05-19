import useCompletarPerfilViewModel from "../viewmodel/CompletarPerfilViewModel";

const CompletarPerfilView = () => {
  const {
    rut,
    setRut,
    telefono,
    setTelefono,
    cargando,
    error,
    completarPerfil,
  } = useCompletarPerfilViewModel();


return (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-5">
        <div className="card shadow border-0 rounded-4">
          <div className="card-body p-4 p-md-5">
            <h3 className="fw-bold text-center mb-2">Completa tu perfil</h3>

            <p className="text-muted text-center mb-4">
              Para continuar, se requiere su RUT y telefono.
            </p>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={completarPerfil}>
              <div className="mb-3">
                <label htmlFor="rut" className="form-label fw-semibold">
                  RUT
                </label>

                <input
                  id="rut"
                  type="text"
                  className="form-control"
                  placeholder="12.345.678-9"
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="telefono" className="form-label fw-semibold">
                  Telefono
                </label>

                <input
                  id="telefono"
                  type="tel"
                  className="form-control"
                  placeholder="+56 9 1234 5678"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100" disabled={cargando}>
                {cargando ? "Guandando..." : "Guardar perfil"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default CompletarPerfilView;
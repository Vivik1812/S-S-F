import useAutenticacionViewModel from "../viewmodel/AutenticacionViewModel"

const AutenticacionView = () => {
    useAutenticacionViewModel();

    return(
        <div className="container text-center py-5">
            <h3>
                Validando autenticacion...
            </h3>
        </div>
    )
}

export default AutenticacionView;
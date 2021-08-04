import { useDispatch, useSelector } from 'react-redux';

import { startSaveCode } from '../../actions/Code';
import { randomeCode } from '../../helpers/Code';
import { Alert } from '../ui/Alert';
import { Loading } from '../ui/Loading';

export const GenerateCode = () => {

    const { loading } = useSelector(state => state.ui);
    const { codeGenerated } = useSelector(state => state.code);


    const dispatch = useDispatch();

    const handleGenerate = (e) => {
        e.preventDefault();

        const generated = randomeCode();

        dispatch(startSaveCode(generated));
    }

    return (
        <>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            <form onSubmit={handleGenerate}>
                                <div className="form-group codes-input">
                                    {(codeGenerated && !loading) && <Alert />}

                                    <button type="submit" className="btn shadow-none btn-wide-freeflix">
                                        {loading ? <Loading /> : 
                                            <>
                                                <i className="fas fa-random me-2"></i>
                                                Generar
                                            </>
                                        }

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import { useDispatch, useSelector } from 'react-redux';
import { startSaveCode } from '../../actions/Code';
import { randomeCode } from '../../helpers/Code';

import { useCodes } from '../../hooks/useCodes';

import { Loading } from '../ui/Loading';
import { LoadingRed } from '../ui/LoadingRed';
import { CodeGrid } from './CodeGrid';

export const Codes = () => {

    useCodes();

    const { loading } = useSelector(state => state.ui);
    const { codes } = useSelector(state => state.code);

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
                            <button type="button" className="btn shadow-none btn-freeflix mt-4 mb-4" onClick={handleGenerate} disabled={loading}>
                                <>
                                    <i className="fas fa-random me-2"></i>
                                    Generar
                                </>
                            </button>

                            {loading && <Loading/>}

                            {(codes) &&
                                <div>
                                    <div className="codes-list mt-4">
                                        {
                                            codes.map(code => (
                                                <CodeGrid code={code} key={code.id} />
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

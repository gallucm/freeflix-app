import { useDispatch, useSelector } from 'react-redux';
import { startSaveCode } from '../../actions/Code';
import { randomeCode } from '../../helpers/Code';
import { useCodes } from '../../hooks/useCodes';
import { Loading } from '../ui/Loading';
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

            <button type="button" className="btn shadow-none btn-freeflix mt-4 mb-3" onClick={handleGenerate} disabled={loading}>
                {loading ? <Loading /> : <>
                    <i className="fas fa-random me-2"></i>
                    Generar
                </>}
            </button>

            {(codes) &&
                <div className="codes-container">
                    <div className="codes-list">
                        {
                            codes.map(code => (
                                <CodeGrid code={code} key={code.id} />
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}

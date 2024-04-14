import React, { useState } from 'react';
import { changeEquipmentState } from '../interactions/equipmentsContract';

function EquipmentsPlace({ id, name, state, pid }) {
    const [equipmentState, setEquipmentState] = useState(state);

    const handleToggle = async () => {
        const result = await changeEquipmentState(id, state === 'Running' ? 'Stopped' : 'Running', localStorage.getItem('userAddress'));
        if (result) {
            setEquipmentState(prevState => prevState === 'Running' ? 'Stopped' : 'Running');
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', backgroundColor: '#f9f9f9', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <label style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px', borderRadius: '50px', backgroundColor: 'gray' }}>
                    <input type="checkbox" onChange={handleToggle} checked={equipmentState === 'Running'} style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 'auto', bottom: 0, backgroundColor: '#ccc', transition: '0.4s', borderRadius: '34px' }}></span>
                    <span style={{ position: 'absolute', content: '""', height: '26px', width: '26px', left: equipmentState === 'Running' ? '30px' : '4px', bottom: '4px', backgroundColor: 'blue', transition: '0.4s', borderRadius: '50%' }}></span>
                </label>
            </div>
            <div>
                <div style={{ marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold', color: '#666' }}>Equipment Name:</span> {name}
                </div>
                <div style={{ marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold', color: '#666' }}>Equipment ID:</span> {id}
                </div>
                <div style={{ marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold', color: '#666' }}>State:</span> {equipmentState}
                </div>
                <div>
                    <span style={{ fontWeight: 'bold', color: '#666' }}>Product ID:</span> {pid}
                </div>
            </div>
        </div>
    );
}

export default EquipmentsPlace;



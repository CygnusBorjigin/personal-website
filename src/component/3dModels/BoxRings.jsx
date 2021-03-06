// import framework
import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';

// import component
import OrbitBox from './OrbitBox.js';

const Ring = ( props ) => {
	const { surface } = props;
	const leftRingPosition = 9;
	return(
		<Canvas camera={ { position:[0, 20, 0] } }>
			<pointLight color='white' intensity={5} position={[0, 0, 0]} />
			
			<OrbitBox plain={ surface } radius={8} orbitSpeed={1} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={8} orbitSpeed={2} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={8} orbitSpeed={3} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={8} orbitSpeed={4} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={8} orbitSpeed={5} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={8} orbitSpeed={6} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={8} orbitSpeed={7} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={8} orbitSpeed={8} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={8} orbitSpeed={9} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>

			<OrbitBox plain={ surface } radius={6} orbitSpeed={-1} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={6} orbitSpeed={-2} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={6} orbitSpeed={-3} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={6} orbitSpeed={-4} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={6} orbitSpeed={-5} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={6} orbitSpeed={-6} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={6} orbitSpeed={-7} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={6} orbitSpeed={-8} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
			<OrbitBox plain={ surface } radius={6} orbitSpeed={-9} rotationSpeed={2} center={ leftRingPosition } startPosition={ 0 }/>
		</Canvas>
	);
};

export default Ring;

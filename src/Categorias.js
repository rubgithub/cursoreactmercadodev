import React from 'react'
import { Link, Route } from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import Categoria from './Categoria'

const Categorias = (props) => {
	return(
		<div>
			<HeaderInterno/>
			<div className='container' style={{paddingTop: '120px'}}>
				<h1>Categorias</h1>
				<div className='row'>
					<div className='col-lg-4'>
						<ul>
							abre como se fosse uma nova pagina
							{props.categorias.map( cat => {
								return (
										<li><Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link></li>
									)
							})}
						</ul>
					</div>
					<div className='col-lg-8'>
						component categoria não renderiza
						<Route path='/categorias/:urlCategoria' component={Categoria}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Categorias
import React, {useState, useEffect} from 'react';

function Rutes() {

    const [articles, setArticulos] = useState([])

    useEffect(() => {
        fetch('https://scratchya.com.ar/react/datos.php')
        .then((response) => {
            return response.json()
        })
        .then ((articles)=>{
            setArticulos(articles)
        })
        return(
            <>
                <h1>Llistat de rutes</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Codi</th>
                                <th>Descripció</th>
                                <th>Preu</th>
                            </tr>
                        </thead>
                        <tbody>
                            { articles.map(art => {
                                return(
                                    <>
                                    <tr key={art.codigo}>
                                        <td>{art.codigo}</td>
                                        <td>{art.descripcion}</td>
                                        <td>{art.precio}</td>
                                    </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )

    }, [])
}

export default Rutes;
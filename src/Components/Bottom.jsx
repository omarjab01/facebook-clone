import React from 'react'

const languages = ["Italiano",
    "English (US)",
    "Română",
    "Français (France)",
    "Sardu",
    "Deutsch",
    "Español",
    "Shqip",
    "العربي",
    "Português (Brasil)",
    "हिन्द",
]

const links = [
    "Iscriviti", "Accedi", "Messenger", "Facebook Lite", "Watch", "Luoghi", "Giochi","Marketplace","Facebook Pay","Oculus","Portal","Instagram","Bulletin","Nei dintorni","Raccolte fondi","Servizi","Centro informazioni sul voto","Gruppi","Informazioni","Crea un'inserzione","Crea una Pagina","Sviluppatori","Opportunità di lavoro","Privacy","Cookie","Scegli tu!","Condizioni","Centro assistenza","Caricamento dei contatti e non-utenti","Impostazioni","Registro attività",
]

const Bottom = () => {
  return (
    <div className='w-screen h-1/5 flex flex-col justify-center'>
        <div className='max-w-5xl mx-auto my-4 '>
            <div>
                <ul className='flex flex-row gap-2 text-xs text-gray-600'>
                {
                    languages.map((lingua, index) => (
                        <li key={index}>{lingua}</li>
                    ))
                }
                </ul>
            </div>
            <hr className='my-3'/>
            <div>
                <ul className='flex flex-row gap-2 text-xs flex-wrap justify-start text-gray-600'>
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                {link}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Bottom
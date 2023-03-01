import Head from 'next/head'

const Meta = ({title, keywords, description})=>{
return (
   
    <Head>
        <title>{title}</title>
        <meta charset="UTF-8"/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content="Programmer Rowshan"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head> 
)
}
Meta.defaultProps={
  title:'Amazone Rowshan',
  description:'This is Amazone Rowshan',
  keywords: 'Amazone, ProgrammerRowshan, amazone, ProgrammerRowshan,store'
}

export default Meta
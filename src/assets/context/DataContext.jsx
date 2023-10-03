import { Children, createContext } from 'react';

const DataContext = createContext()

function DataContext({children}) {



    return (
        <DataContext.Provider>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
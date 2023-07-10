import {gql, useQuery} from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'
import Spinner from './Spinner'


export default function Clients() {
    const {loading, error, data} = useQuery(GET_CLIENTS)

    if (loading) return <p><Spinner></Spinner></p>
    if (error) return <p>Something went wrong</p>

    return (
        <>
            {!loading && !error && (
                <table className = 'table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.clients.map(client => (
                            <ClientRow key={client.id} client={client} />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )

    return <div>Clients</div>
}
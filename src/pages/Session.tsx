import { useParams } from 'react-router-dom'
import { SESSIONS } from '../dummy-sessions'
import Button from '../components/UI/Button'

export default function SessionPage() {
    const params = useParams<{ id: string }>()

    const sessionId = params.id
    const loadedSession = SESSIONS.find(session => session.id === sessionId)

    if (!loadedSession) {
        return (
            <main id='session-page'>
                <p>No session found!</p>
            </main>
        )
    }

    const handleStartBooking = () => {
        // Handle booking logic here
    }

    const handleStopBooking = () => {
        // Handle stop booking logic here
    }

    return (
        <main id='session-page'>
            <article>
                <header>
                    <img src={loadedSession.image} alt={loadedSession.title} />
                    <div>
                        <h2>{loadedSession.title}</h2>
                        <time dateTime={new Date(loadedSession.date).toISOString()}>
                            {new Date(loadedSession.date).toLocaleDateString('en-US', {
                                day: 'numeric', month: 'short', year: 'numeric'
                            })}
                        </time>
                        <Button onClick={handleStartBooking}>Book Session</Button>
                    </div>
                </header>
                <p id='content'>{loadedSession.description}</p>
            </article>
        </main>
    )
}
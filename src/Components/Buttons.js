import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";

export default function Buttons() {

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <>
            < Button variant="info" > Info</Button > {' '}
            < Button variant="outline-info" > Info</Button > {' '}
            < Button variant="primary" > Primary</Button > {' '}
            < Button variant="secondary" size="lg" >
                Large button
            </Button >
            <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Loading…' : 'Click to load'}
            </Button>
        </>
    )
}
import {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel
} from "@/components/ui/alert-dialog";

import { useState, useEffect } from "react";

type ErrorCardProps = {
    errorMessage: string;
    onRetry?: () => void;
};

const ErrorCard = ({ errorMessage, onRetry }: ErrorCardProps) => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (errorMessage) {
            setShowAlert(true);
        }
    }, [errorMessage]);

    const handleRetry = () => {
        if (onRetry) {
            onRetry();
        }
        setShowAlert(false);
    };

    return (
        <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
            <AlertDialogPortal>
                <AlertDialogOverlay />
                <AlertDialogContent className="max-w-md">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Error</AlertDialogTitle>
                        <AlertDialogDescription>
                            {errorMessage}
                            <br />
                            Please try after some time if the issue persists.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setShowAlert(false)}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handleRetry}>
                            Retry
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogPortal>
        </AlertDialog>
    );
};

export default ErrorCard;

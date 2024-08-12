import React, { createContext, useState, useContext } from 'react';

const OngoingActivitiesContext = createContext();

export const useOngoingActivities = () => useContext(OngoingActivitiesContext);

export const OngoingActivitiesProvider = ({ children }) => {
    const [visits, setVisits] = useState([]);
    const [draftBookings, setDraftBookings] = useState([]);
    const [completedBookings, setCompletedBookings] = useState([]);

    return (
        <OngoingActivitiesContext.Provider
            value={{
                visits,
                setVisits,
                draftBookings,
                setDraftBookings,
                completedBookings,
                setCompletedBookings,
            }}
        >
            {children}
        </OngoingActivitiesContext.Provider>
    );
};

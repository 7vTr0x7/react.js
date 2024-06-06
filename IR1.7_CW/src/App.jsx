const Message = ({ isLoggedIn }) => (
  <p>{isLoggedIn ? "Welcome back, User" : "Please login to continue"}</p>
);

const Greeting = ({ isMorning }) => (
  <p>{isMorning ? "Good Morning" : "Good Evening"}</p>
);

const ShowNotification = ({ notification }) => (
  <div>{notification && <p>{notification}</p>}</div>
);

const TicketPricing = ({ passengerAge }) => {
  const price = 100;
  return (
    <div>
      <p>Ticket Price: {passengerAge > 60 ? price - price * 0.15 : price}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Message isLoggedIn={true} />
      <Greeting isMorning={true} />
      <ShowNotification notification="Notification Message" />
      <TicketPricing passengerAge={50} />
    </div>
  );
};

export default App;

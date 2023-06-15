import { useMasa } from "@masa-finance/masa-react";

const MasaRequiredComponent = () => {
  const { connect } = useMasa();

  const handleConnect = () => {
    connect!({
      scope: [],
      callback: () => {
        alert("Hey I am connected!, now I can do whatever I want");
      },
    });
    // connect!({ scope: [], callback: () => {} });
  };

  return <div onClick={handleConnect}>Hey! Connect with masa!</div>;
};

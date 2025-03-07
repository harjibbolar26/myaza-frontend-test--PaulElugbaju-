export interface IRecentTx {
  name: string;
  date: string;
  amount: string;
  status: string;
  logo: string;
  id: string;
}

export const RecentTtransactions: IRecentTx[] = [
    {
      name: "Adobe After Effect",
      date: "Sat,20 Apr 2020",
      amount: "$80.09",
      status: "Deposited",
      logo: "adobe.png",
      id: "adobe-1",
    },
    {
      name: "McDonald's",
      date: "Sat,20 Apr 2020",
      amount: "$80.09",
      status: "Deposited",
      logo: "mcdonald.png",
      id: "mcdonald",
    },
    {
      name: "Levi",
      date: "Sat,20 Apr 2020",
      amount: "$80.09",
      status: "Deposited",
      logo: "levi.png",
      id: "levi-1",
    },
    {
      name: "Adobe After Effect",
      date: "Sat,20 Apr 2020",
      amount: "$80.09",
      status: "Deposited",
      logo: "adobe.png",
      id: "adobe-2",
    },
    {
      name: "Levi",
      date: "Sat,20 Apr 2020",
      amount: "$80.09",
      status: "Deposited",
      logo: "levi.png",
      id: "levi-2",
    },
  ];
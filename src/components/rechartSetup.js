export const data = [
  {
    name: "Jan",
    amt: 2400,
  },
  {
    name: "Feb",

    amt: 2210,
  },
  {
    name: "Mar",

    amt: 2290,
  },
  {
    name: "Apr",

    amt: 2000,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "Jun",

    amt: 2500,
  },
  {
    name: "Jul",

    amt: 2100,
  },
];
export const Weeklydata = [
  {
    name: "Mon",
    amt: 400,
  },
  {
    name: "Tue",

    amt: 650,
  },
  {
    name: "Wed",

    amt: 290,
  },
  {
    name: "Thur",

    amt: 840,
  },
  {
    name: "Fri",
    amt: 450,
  },
  {
    name: "Sat",

    amt: 700,
  },
  {
    name: "Sun",

    amt: 300,
  },
];

export function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` $${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
}

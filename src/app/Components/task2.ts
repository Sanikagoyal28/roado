interface Trip {
  from: string;
  to: string;
}

interface Shipment {
  pickUps: string[];
  dropPoints: string[];
}

export default function Task2() {
  function areValid(trips: Trip[], shipment: Shipment) {
    const coveredPoints = new Set<string>();

    // add all pickup nd drop points to covered array
    shipment.pickUps.forEach((point) => coveredPoints.add(point));
    shipment.dropPoints.forEach((point) => coveredPoints.add(point));

    for (const trip of trips) {
        
      //   to ckeck whether it is a valid pickup point
      if (!shipment.pickUps.includes(trip.from) && trip.from != "W") {
        return false; // invalid trip
      }
      //   to ckeck whether it is a valid destination
      if (!shipment.dropPoints.includes(trip.to) && trip.to != "W") {
        return false; // invalid trip
      }

      // update set of covered points
      coveredPoints.add(trip.from);
      coveredPoints.add(trip.to);
    }

    // all pickup and drop points are covered or not
    for (const point of shipment.pickUps.concat(shipment.dropPoints)) {
      if (!coveredPoints.has(point)) {
        return false;
      }
    }

    return true;
  }

  // example
  const shipment: Shipment = {
    pickUps: ["A", "B"],
    dropPoints: ["C", "D"],
  };

  const validTrips: Trip[] = [
    { from: "A", to: "W" },
    { from: "B", to: "W" },
    { from: "W", to: "C" },
    { from: "W", to: "D" },
  ];

  const invalidTrips: Trip[] = [
    { from: "A", to: "W1" },
    { from: "B", to: "W2" },
    { from: "W3", to: "C" },
    { from: "W4", to: "D" },
  ];

  console.log("valid trips ?", areValid(validTrips, shipment));
  console.log("invalid trips?", areValid(invalidTrips, shipment));
}

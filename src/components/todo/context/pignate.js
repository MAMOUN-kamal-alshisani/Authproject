import React from "react";

function Pagination(props) {
  const cards = [];
  for (
    let index = 1;
    index <= Math.ceil(props.totalCards / props.listPerPage);
    index++
  ) {
    cards.push(index);
  }

  return (
    <nav>
      <ul className="pagination pagination-lg">
        {cards.map((number) => (
          <li className="page-item " key={number}>
            <a
              href="!#"
              className="page-link"
              onClick={() => props.paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
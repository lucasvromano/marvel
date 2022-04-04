import './styles.scss';

const Search = ({ value = '', onChange }) => (
  <div className='search'>
    <input className='search__input' type="text" value={value} onChange={onChange} placeholder='Search...' />
  </div>
);

export default Search;

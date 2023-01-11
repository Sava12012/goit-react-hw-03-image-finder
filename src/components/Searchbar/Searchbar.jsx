import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearchQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      toast.error('Please enter a search value');
      return;
    }

    onSubmit(query);
  };

  render() {
    // const { handleSubmit, handleSearchQueryChange } = this;
    // const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          onChange={this.handleSearchQueryChange}
          value={this.state.query}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    );
  }
}

export default Searchbar;

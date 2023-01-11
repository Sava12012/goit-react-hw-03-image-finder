import { Component } from 'react';
import Searchbar from './Searchbar';
import fetchImages from './API';
// import { FallingLines } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

export class App extends Component {
  state = {
    query: '',
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        const { totalHits, hits } = await fetchImages(query, page);

        if (totalHits === 0) {
          toast.error('Nothing was found for your request');
          return;
        }

        this.setState(prevState => ({
          images: page === 1 ? hits : [...prevState.images, ...hits],

          totalHits:
            page === 1
              ? totalHits - hits.length
              : totalHits - [...prevState.images, ...hits].length,
        }));

        this.setState({ isLoading: false });
      } catch (error) {
        toast.error(`Oops! Something went wrong! ${error}`);
      }
    }
  }

  handleQuerySubmit = query => {
    this.setState({ query, page: 1 });
  };

  render() {
    const { handleQuerySubmit } = this;

    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={handleQuerySubmit} />

        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

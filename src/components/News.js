import React, { useContext } from 'react';
import { NewsContext } from '../newsContext';
import NewsArticle from './NewsArticle';

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <div className='ui blue inverted segment'>NewsOnline</div>
      <h4 className='ui dividing header'>Latest News</h4>
      <div className='ui three column grid container'>
        <div className='all__news'>
          {data
            ? data.articles.map((news) => (
                <NewsArticle data={news} key={news.url} />
              ))
            : 'Loading'}
        </div>
      </div>
      <div className='ui floated right pagination menu'>
        <a className='item'>
          <i className='chevron left icon'></i>
        </a>
        <a className='blue active item'>1</a>
        <a className='disabled item'>2</a>
        <a className='disabled item'>3</a>
        <a className='disabled item'>4</a>
        <a className='disabled item'>5</a>
        <a className='item'>
          <i className='chevron right icon'></i>
        </a>
      </div>
    </div>
  );
}

export default News;

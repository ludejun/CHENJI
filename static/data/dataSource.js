var dataSource = {
  'CHENJI-Temple': [
    {
      title: '辰记发布数据',
      content:
        '1Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.234',
      publishTime: '2023-05-02 08:00:00',
      category: '辰记发布',
      noteId: '1',
    },
  ],
  'CHENJI-Temple2': [
    {
      title: '辰记发布2数据',
      content:
        'Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.',
      publishTime: '2023-05-02 12:00:00',
      category: '辰记发布2',
      noteId: '2',
    },
    {
      title: '辰记发布2数据2',
      content:
        'Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.',
      publishTime: '2023-05-01 12:00:00',
      category: '辰记发布2',
      noteId: '3',
    },
  ],
};


    /***** 发布时间：2023-07-03 10:29:07（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    const pub = {
      title: '你好',
      content: '<p>请问分awefawefawegasdfefserfsergserg</p>',
      publishTime: '2023-07-03 10:29:07',
      category: '辰记发布',
      noteId: '6'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === '6'});
      if(note && note.length > 0) {
        note[0].title='你好';
        note[0].content='<p>请问分awefawefawegasdfefserfsergserg</p>';
        note[0].publishTime='2023-07-03 10:29:07';
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    
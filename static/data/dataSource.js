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
    

    /***** 发布时间：2023-07-17 11:17:22（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    const pub = {
      title: '你好',
      content: '<div data-user="4" data-noteId="6" data-pubTime=1689563837020>
        <style type="text/css">
        blockquote{border-left: 4px solid #ccc;padding-left:16px;}
        pre{background: #eee;padding:10px;}
        img{max-width: 100%}
        </style>
        <p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br /><img  width="977" style="display: block; margin: auto;" src="http://localhost:8001/files/4-1689301556558.png" /><br /><img  width="189" style="display: inline; float: right; margin: 0px 0px 1em 1em;" src="http://localhost:8001/files/4-1689529395229.png" /><br /><p >wwww</p><br /><p >rfer</p><br /><br /><p >不管高低</p><br /><p >awefawef</p><br /></div>',
      publishTime: '2023-07-17 11:17:22',
      category: '辰记发布',
      noteId: '6'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === '6'});
      if(note && note.length > 0) {
        note[0].title='你好';
        note[0].content='<div data-user="4" data-noteId="6" data-pubTime=1689563837020>
        <style type="text/css">
        blockquote{border-left: 4px solid #ccc;padding-left:16px;}
        pre{background: #eee;padding:10px;}
        img{max-width: 100%}
        </style>
        <p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br /><img  width="977" style="display: block; margin: auto;" src="http://localhost:8001/files/4-1689301556558.png" /><br /><img  width="189" style="display: inline; float: right; margin: 0px 0px 1em 1em;" src="http://localhost:8001/files/4-1689529395229.png" /><br /><p >wwww</p><br /><p >rfer</p><br /><br /><p >不管高低</p><br /><p >awefawef</p><br /></div>';
        note[0].publishTime='2023-07-17 11:17:22';
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    

    /***** 发布时间：2023-08-14 17:26:49（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    const pub = {
      title: '你好',
      content: '<div class="ql-star-html" data-user="4" data-noteId="6" data-pubTime="1692005205469"><style type="text/css">.ql-star-html{line-height:1.5;font-size:14px;}.ql-star-html p,ol,ul{margin:0;}.ql-star-html blockquote{border-left: 4px solid #ccc;padding-left:16px;margin:0;}.ql-star-html pre{background: #eee;padding:10px;margin:0;}.ql-star-html img{max-width: 100%}</style><p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br/><img style="display: block; margin: auto;" width="977" src="http://localhost:8001/files/4-1689301556558.png"/><br/><img style="display: inline; float: right; margin: 0px 0px 1em 1em;" width="189" src="http://localhost:8001/files/4-1689529395229.png"/><br/>wwww<br/>rfer<br/><br/>不管高低<br/>awefawef</p></div>',
      publishTime: '2023-08-14 17:26:49',
      category: '辰记发布',
      noteId: '6'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === '6'});
      if(note && note.length > 0) {
        note[0].title='你好';
        note[0].content='<div class="ql-star-html" data-user="4" data-noteId="6" data-pubTime="1692005205469"><style type="text/css">.ql-star-html{line-height:1.5;font-size:14px;}.ql-star-html p,ol,ul{margin:0;}.ql-star-html blockquote{border-left: 4px solid #ccc;padding-left:16px;margin:0;}.ql-star-html pre{background: #eee;padding:10px;margin:0;}.ql-star-html img{max-width: 100%}</style><p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br/><img style="display: block; margin: auto;" width="977" src="http://localhost:8001/files/4-1689301556558.png"/><br/><img style="display: inline; float: right; margin: 0px 0px 1em 1em;" width="189" src="http://localhost:8001/files/4-1689529395229.png"/><br/>wwww<br/>rfer<br/><br/>不管高低<br/>awefawef</p></div>';
        note[0].publishTime='2023-08-14 17:26:49';
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    

    /***** 发布时间：2023-09-10 22:37:47（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    var pub = {
      title: '你好',
      content: `<div class="ql-star-html" data-user="4" data-noteId="6" data-pubTime="1694356661066"><style type="text/css">.ql-star-html{line-height:1.5;font-size:14px;}.ql-star-html p,ol,ul{margin:0;}.ql-star-html blockquote{border-left: 4px solid #ccc;padding-left:16px;margin:0;}.ql-star-html pre{background: #eee;padding:10px;margin:0;}.ql-star-html img{max-width: 100%}</style><p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br/><img style="display: block; margin: auto;" width="977" src="http://localhost:8001/files/4-1689301556558.png"/><br/><img style="display: inline; float: right; margin: 0px 0px 1em 1em;" width="189" src="http://localhost:8001/files/4-1689529395229.png"/><br/>wwww<br/>rfer<br/><br/>不管高低<br/>awefawef</p></div>`,
      publishTime: '2023-09-10 22:37:47',
      category: '辰记发布',
      noteId: '6'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === '6'});
      if(note && note.length > 0) {
        note[0].title=pub.title;
        note[0].content=pub.content;
        note[0].publishTime=pub.publishTime;
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    

    /***** 发布时间：2023-09-11 00:22:20（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    var pub = {
      title: '你好',
      content: `<div class="ql-star-html" data-user="4" data-noteId="6" data-pubTime="1694362936137"><style type="text/css">.ql-star-html{line-height:1.5;font-size:14px;}.ql-star-html p,ol,ul{margin:0;}.ql-star-html blockquote{border-left: 4px solid #ccc;padding-left:16px;margin:0;}.ql-star-html pre{background: #eee;padding:10px;margin:0;}.ql-star-html img{max-width: 100%}</style><p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br/><img style="display: block; margin: auto;" width="977" src="http://localhost:8001/files/4-1689301556558.png"/><br/><img style="display: inline; float: right; margin: 0px 0px 1em 1em;" width="189" src="http://localhost:8001/files/4-1689529395229.png"/><br/>wwww<br/>rfer<br/><br/>不管高低<br/>awefawef</p></div>`,
      publishTime: '2023-09-11 00:22:20',
      category: '辰记发布',
      noteId: '6'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === '6'});
      if(note && note.length > 0) {
        note[0].title=pub.title;
        note[0].content=pub.content;
        note[0].publishTime=pub.publishTime;
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    

    /***** 发布时间：2023-09-11 16:30:16（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    var pub = {
      title: '你好',
      content: `<div class="ql-star-html" data-user="4" data-noteId="6" data-pubTime="1694421009402"><style type="text/css">.ql-star-html{line-height:1.5;font-size:14px;}.ql-star-html p,ol,ul{margin:0;}.ql-star-html blockquote{border-left: 4px solid #ccc;padding-left:16px;margin:0;}.ql-star-html pre{background: #eee;padding:10px;margin:0;}.ql-star-html img{max-width: 100%}</style><p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br/><img style="display: block; margin: auto;" width="977" src="http://localhost:8001/files/4-1689301556558.png"/><br/><img style="display: inline; float: right; margin: 0px 0px 1em 1em;" width="189" src="http://localhost:8001/files/4-1689529395229.png"/><br/>wwww<br/>rfer<br/><br/>不管高低<br/>awefawef</p></div>`,
      publishTime: '2023-09-11 16:30:16',
      category: '辰记发布',
      noteId: '6'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === '6'});
      if(note && note.length > 0) {
        note[0].title=pub.title;
        note[0].content=pub.content;
        note[0].publishTime=pub.publishTime;
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    

    /***** 发布时间：2023-09-12 10:17:39（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    var pub = {
      title: '你好',
      content: `<div class="ql-star-html" data-user="4" data-noteId="6" data-pubTime="1694485053743"><style type="text/css">.ql-star-html{line-height:1.5;font-size:14px;}.ql-star-html p,ol,ul{margin:0;}.ql-star-html blockquote{border-left: 4px solid #ccc;padding-left:16px;margin:0;}.ql-star-html pre{background: #eee;padding:10px;margin:0;}.ql-star-html img{max-width: 100%}</style><p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br/><img style="display: block; margin: auto;" width="977" src="http://localhost:8001/files/4-1689301556558.png"/><br/><img style="display: inline; float: right; margin: 0px 0px 1em 1em;" width="189" src="http://localhost:8001/files/4-1689529395229.png"/><br/>wwww<br/>rfer<br/><br/>不管高低<br/>awefawef</p></div>`,
      publishTime: '2023-09-12 10:17:39',
      category: '辰记发布',
      noteId: '6'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === '6'});
      if(note && note.length > 0) {
        note[0].title=pub.title;
        note[0].content=pub.content;
        note[0].publishTime=pub.publishTime;
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    

    /***** 发布时间：2023-09-12 10:19:14（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    var pub = {
      title: '你好',
      content: `<div class="ql-star-html" data-user="4" data-noteId="6" data-pubTime="1694485150983"><style type="text/css">.ql-star-html{line-height:1.5;font-size:14px;}.ql-star-html p,ol,ul{margin:0;}.ql-star-html blockquote{border-left: 4px solid #ccc;padding-left:16px;margin:0;}.ql-star-html pre{background: #eee;padding:10px;margin:0;}.ql-star-html img{max-width: 100%}</style><p><strong style="font-family: 微软雅黑;font-size: 18px">啊违法违法</strong><br/><br/><span style="color:#e60000">请问分awefawe</span><span style="color:#e60000">faw</span><span style="background-color:#008a00">egasdfefserfser</span><span style="background-color:#008a00">gserg</span><br/><br/></p><p style="text-align:right"><em><u>nihao</u></em></p><ol><li>afwef</li><li>aw<span style="color:#008a00">efawef</span></li><li>awefawef</li></ol><p><br/></p><ul><li>sdffgsgs</li><li>afawef</li><li>aefaw</li></ul><p><br/>尊敬的领导：</p><p style="padding-left:3em">氨酚烷胺违法</p><p style="padding-left:3em">阿伟发</p><p>阿尔法违法<br/></p><blockquote>让他二哥哇</blockquote><p><br/></p><pre data-language="javascript">const a = &#x27;aefwefawef&#x27;;</pre><p><br/><img style="display: block; margin: auto;" width="977" src="http://localhost:8001/files/4-1689301556558.png"/><br/><img style="display: inline; float: right; margin: 0px 0px 1em 1em;" width="189" src="http://localhost:8001/files/4-1689529395229.png"/><br/>wwww<br/>rfer<br/><br/>不管高低<br/>awefawef</p></div>`,
      publishTime: '2023-09-12 10:19:14',
      category: '辰记发布',
      noteId: '6'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === '6'});
      if(note && note.length > 0) {
        note[0].title=pub.title;
        note[0].content=pub.content;
        note[0].publishTime=pub.publishTime;
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    

    /***** 发布时间：2023-12-31 18:54:51（以最后发布的为准）*****/
    dataSource['CHENJI-Temple']=undefined;
    dataSource['CHENJI-Temple2']=undefined;
    var pub = {
      title: 'UI沟通20231231',
      content: `<div class="ql-star-html" data-user="1704014129542037" data-noteId="nltlqtbscxt" data-pubTime="1704020079983"><style type="text/css">.ql-star-html{line-height:1.5;font-size:14px;}.ql-star-html p,ol,ul{margin:0;}.ql-star-html blockquote{border-left: 4px solid #ccc;padding-left:16px;margin:0;}.ql-star-html pre{background: #eee;padding:10px;margin:0;}.ql-star-html img{max-width: 100%}</style><h2>一. UI主题</h2><ol><li>主题色，UI可以调，喜欢偏紫蓝</li></ol><p>目前主色：#6918b4；副色： #dbc8ff<br/>2. 基础组件使用的Antd的组件，做了主题定制：<br/>active Color使用系统主色，圆角 4px<br/></p><h2>二. Logo</h2><ol><li>我的想法：参考苹果的logo和阿里云盘的设计</li></ol><p>整体和苹果很像，取首字母CJ拼接<br/><img style width="435" src="http://66.42.124.73:8001/files/1704014129542037-1704018044492.png"/><br/>也可以将上面的图案像云盘取反白，周围主题色，加点渐变<br/><img style src="http://66.42.124.73:8001/files/1704014129542037-1704018105850.png"/><br/>2. UI可以按自己想法出，最好出更多尺寸（.png)，多种形态：单logo，logo后接文字，.ico、.svg<br/></p><h2>三. 我觉得要UI调整的地方</h2><ol><li>左侧第一列的icon上次都没有导出，随便在antd中找的</li></ol><p><img style src="http://66.42.124.73:8001/files/1704014129542037-1704018850982.png"/><br/>2. 右侧Header，可能多个相同的头像，发布按钮是核心功能要加强<br/><img style src="http://66.42.124.73:8001/files/1704014129542037-1704018912610.png"/><br/>3. 点击...导出的pdf的模板，有空可以设计一个，这个不算核心，加上品牌和主题色应该就好<br/>4. 编辑器的多个形态UI可能需要调整，已按主题色做过大量调整<br/>	1）code编辑框，参考的飞书</p><pre data-language="javascript">&#x2F;&#x2F; getBase64(file, url =&gt; { console.log(url) })
export const getBase64 = (img: File): Promise&lt;string&gt; =&gt; {
  return new Promise(resolve =&gt; {
    const reader = new FileReader();
    reader.addEventListener(&#x27;load&#x27;, () =&gt; resolve(reader.result as string));
    reader.readAsDataURL(img);
  });
};</pre><p>	2）图片编辑器，可以点击上面的图片，会出现toolbar和线框，可以体验。也可以copy一张图片上传试试<br/>	3）<a href="https://www.baidu.com" target="_blank">超链接编辑框</a> , 点击左侧超链接体验<br/>	4）table：表格是现在富文本编辑器bug较多的地方。UI可以从样式上提出建议。点击table上方出现的toolbar是用来调整表格宽度的<br/><br/><br/><br/><br/><br/><br/>你好<br/>标题<br/><br/><br/><br/><br/>的的饿的<br/>阿文啊我<br/>阿维服务<br/>1. awfe<br/>2. awefawef <br/><br/><br/><br/><br/><br/><br/>	</p></div>`,
      publishTime: '2023-12-31 18:54:51',
      category: '辰记发布',
      noteId: 'nltlqtbscxt'
    };
    if(dataSource['辰记发布']) {
      const note = dataSource['辰记发布'].filter(function(item){ return item.noteId === 'nltlqtbscxt'});
      if(note && note.length > 0) {
        note[0].title=pub.title;
        note[0].content=pub.content;
        note[0].publishTime=pub.publishTime;
      } else {
        dataSource['辰记发布'].push(pub);
      }
    }else{
      dataSource['辰记发布']=[pub];
    }
    
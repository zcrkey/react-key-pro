import React from 'react';
import styleModule from './style.module.scss';

const styles = {
  title: {
    fontSize: '0.2rem',
    marginBottom: '15px'
  }
};

export default class Style extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        styleModule
        <h4 style={styles.title}>Style - 局部样式</h4>
        <div className={styleModule.color + ' ' + styleModule.fontSize}>
          我是局部样式
        </div>
        <br />
        <h4 style={styles.title}>Style - 文本</h4>
        <div style={{ width: '400px' }}>
          文本，是指书面语言的表现形式，从文学角度说，通常是具有完整、系统含义（Message）的一个句子或多个句子的组合。一个文本可以是一个句子（Sentence）、一个段落（Paragraph）或者一个篇章（Discourse）。广义“文本”：任何由书写所固定下来的任何话语。（利科尔） 狭义“文本”：由语言文字组成的文学实体，代指“作品”，相对于作者、世界构成一个独立、自足的系统。
        </div>
        {/* <div style={{ width: '400px', fontFamily: "Noto Sans SC" }}>
          文本，是指书面语言的表现形式，从文学角度说，通常是具有完整、系统含义（Message）的一个句子或多个句子的组合。一个文本可以是一个句子（Sentence）、一个段落（Paragraph）或者一个篇章（Discourse）。广义“文本”：任何由书写所固定下来的任何话语。（利科尔） 狭义“文本”：由语言文字组成的文学实体，代指“作品”，相对于作者、世界构成一个独立、自足的系统。
        </div>
        <div style={{ width: '400px', fontFamily: 'PingFangSC-Regular' }}>
          文本，是指书面语言的表现形式，从文学角度说，通常是具有完整、系统含义（Message）的一个句子或多个句子的组合。一个文本可以是一个句子（Sentence）、一个段落（Paragraph）或者一个篇章（Discourse）。广义“文本”：任何由书写所固定下来的任何话语。（利科尔） 狭义“文本”：由语言文字组成的文学实体，代指“作品”，相对于作者、世界构成一个独立、自足的系统。
        </div> */}
        <br />
        <h4 style={styles.title}>Style - 链接</h4>
        <div>
          <a href="https:www.baidu.com">123456789</a>
          <br />
          <a href="https:www.baidu.com">超链接</a>
          <br />
          <a href="https:www.baidu.com">link</a>
        </div>
        <br />
        <h4 style={styles.title}>Style - 表单</h4>
        <div>
          <input type="text" placeholder="text"></input> <br />
          <input type="number" placeholder="number"></input> <br />
          <input type="password" placeholder="password"></input> <br />
          <input type="checkbox"></input><input type="checkbox"></input><input type="checkbox"></input> <br />
          <input type="radio" name="radio1"></input><input type="radio" name="radio1"></input><input type="radio" name="radio1"></input> <br />
          <input type="file"></input> <br />
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select> <br />
          <select>
            <optgroup label="1">
              <option>1</option>
            </optgroup>
            <optgroup label="2">
              <option>2</option>
            </optgroup>
            <optgroup label="3">
              <option>3</option>
            </optgroup>
          </select> <br />
          <textarea></textarea>
        </div> <br />
        <h4 style={styles.title}>Style - 表格</h4>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>标题一</th>
                <th>标题二</th>
                <th>标题三</th>
                <th>标题四</th>
                <th>标题五</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>内容一</td>
                <td>内容二</td>
                <td>内容三</td>
                <td>内容四</td>
                <td>内容五</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}
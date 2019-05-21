import React, { Component } from 'react';
import GlobalStyle from './componentes/styles/global'
import { Container, Content } from './styles'
import Upload from './componentes/upload';
import FileList from './componentes/FileList';

class App extends Component {
  state = {
    uploadedFiles: [],
    // vai armazenar os arquivos no estado
  };

  handleUpload = files => {

    console.log(files)

  };


  render() {
    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    )

  };
}

export default App;

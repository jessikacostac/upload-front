import React, { Component } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';

import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'; 

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKD72tGJ9gEQARgBMgjrQ6ezLV7SWQ" />
        <div>
          <strong>profile.png</strong>
          <span>64kb <button onClick={() => { }} />Excluir</span>
        </div>
      </FileInfo>

      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: '#7159c1' }
          }}
          strokeWidth={10}
          percentage={60}
        />
        <a 
        href={"https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKD72tGJ9gEQARgBMgjrQ6ezLV7SWQ"}
        blank="_blank"
        rel="noopener noreferrer"
        >
        <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
        </a>

        <MdCheckCircle size={24} color="#78e5d5" />
        <MdError size={24} color="#e57878" />
      </div>

    </li>
  </Container>
);

export default FileList;
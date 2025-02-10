class Block {
  getInfo() {
    return {
      id: &#39;tools&#39;,
      name: &#39;工具&#39;,
      blocks: [
        {
          opcode: &#39;endl&#39;,
          blockType: Scratch.BlockType.REPORTER,
          text: &#39;换行&#39;
        }
      ]
    };
  }

  endl() {
    return &#39;\n&#39;;
  }
}

Scratch.extensions.register(new Block());

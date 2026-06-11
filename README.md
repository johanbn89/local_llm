# Guide to Running Local LLMs

There are many ways to run and interact with an LLM locally, for example through VS Code, the Codex app, or the Claude Code desktop app.

For desktop applications, you can often change the model by switching the backend. One common backend is Ollama, a framework for running models locally.

For example, you can use Ollama to run a Llama model and connect it to applications that support local model backends:

https://ollama.com/library/llama3.1

You need to install Ollama first before using it as a backend.

Another alternative is to use vscode, download the extension Microsoft Foundry Toolkit. Press crtl + alt + L. Then you should be able to open the chat window and there can we change to one of the local LLM's. 


<img width="457" height="259" alt="image" src="https://github.com/user-attachments/assets/736bffd0-a70b-466d-ada2-198a5288b6b8" />

Remark:
Agent mode means the AI can do more than just answer questions.

In normal chat mode, you ask something and the model replies with text.

In agent mode, the model can act more like a coding assistant that works through a task. In VS Code/Copilot, it can inspect your workspace, decide which files need changes, suggest or make edits, propose terminal commands, and iterate until the task is done.

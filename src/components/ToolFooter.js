export const ToolFooter = ({ copyRightHolder }) => <>
  <footer>
    <small>Copyright {new Date().getFullYear()}. {copyRightHolder}</small>
  </footer>
</>;

ToolFooter.defaultProps = {
  copyRightHolder: "A Cool Company, Inc.",
}
import importlib
import akebono.settings as settings


class CommandBase:
    def apply_arguments(self, parser):
        pass

    def pre_execute(self, namespace):
        mod_config = importlib.import_module(namespace.config)
        settings.load(mod_config)

    def execute(self, namespace):
        raise NotImplementedError()

    def execute_all(self, namespace):
        self.pre_execute(namespace)
        self.execute(namespace)